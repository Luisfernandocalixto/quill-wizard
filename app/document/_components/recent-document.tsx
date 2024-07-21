import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { db } from '@/utils/db';
import { auth } from '@clerk/nextjs/server'
import { BookText } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'
import Link from 'next/link';

const RecentDocument = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/")
    }

    const userDocument = await db.document.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createAt: 'asc'
        }

    });



    return (
        <div className='w-10/12 mx-auto my-4'>
            <h1 className='font-semibold text-sm mb-4'>Recent Document</h1>
            <div className='flex gap-8 flex-wrap'>
                {userDocument.length > 0
                    ? (
                        userDocument.map((document) => (
                            <div key={document.id} className='w-[150px]'>
                                <Link href={`/document/${document.id}`}>
                                    <Card className='w-[150px] hover:border-blue-500 hover:cursor-pointer'>
                                        <CardHeader></CardHeader>
                                        <CardContent>
                                            <BookText size={60} className='flex justify-center mx-auto' />
                                        </CardContent>
                                        <CardFooter></CardFooter>
                                    </Card>
                                </Link>
                                <p className='text-sm mt-2 text-center'>{document.title}</p>
                            </div>
                        ))
                    )
                    :
                    (
                    <p className='text-sm'>Once you  start writing your recent document will go here...</p>
                )
                }

            </div>
        </div>
    )
}

export default RecentDocument
