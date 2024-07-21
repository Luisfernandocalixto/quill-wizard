"use client"
import Editor from '@/components/editor'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast, useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React, { use } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import DrawerAI from './drawer-ai'

const FormSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2),
})

interface DocumentProps {
    id: string;
    userId: string;
    title: string | null;
    description: string | null;
    createAt: Date;
    updateAt: Date;
}
interface EditorBlockProps {
    document?: DocumentProps | null;
}


const EditorBlock: React.FC<EditorBlockProps> = ({ document }) => {
    const { toast } = useToast();

    if (!document) {
        redirect("/")
    }

    const EditorForm = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: document.title || "",
            description: document.description || "",
        },
    });

    async function onUpdateChange(values: z.infer<typeof FormSchema>) {

        try {
            await axios.put(`/api/document/${document?.id}`, values);

            toast({ title: "Document Successfully Updated" })
            revalidatePath("/");
            revalidatePath("/document/" + document?.id);
        } catch (error) {

        }
    }

    async function onDocumentDelete() {
        try {
            await axios.delete(`/api/document/${document?.id}`);

            toast({ title: "Document Delete Successfully" });
        } catch (error) {
            console.log(error);
        }
    }





    return (
        <div className='px-4'>
            <div className='flex float-right my-2 space-x-4'>
                <DrawerAI description={document.description} />
                <form onSubmit={onDocumentDelete}
                    className="flex float-right">
                    <Button type='submit' variant='destructive'>
                        Delete
                    </Button>
                </form>
            </div>


            <Form {...EditorForm}>
                <form onSubmit={EditorForm.handleSubmit(onUpdateChange)}
                    className='space-y-8'>
                    <FormField control={EditorForm.control} name='title' render={({ field }) =>
                    (<FormItem>
                        <FormControl>
                            <Input placeholder="Enter Title here" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>)}>
                    </FormField>

                    <FormField control={EditorForm.control} name='description' render={({ field }) =>
                    (<FormItem className='my-4'>
                        <FormControl>
                            <Editor {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>)}>
                    </FormField>
                    <Button type="submit">Save changes</Button>
                </form>
            </Form>
        </div>
    )
};

export default EditorBlock
