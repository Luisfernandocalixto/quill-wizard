import { auth } from '@clerk/nextjs/server'
import React, { Suspense } from 'react'
import IntroPage from './intro-page';
import { NewDocument } from './new-document';
import RecentDocument from './recent-document';
import { Loader } from 'lucide-react';

export const Dashboard = () => {
    const { userId } = auth();


    if (!userId) {
        return <IntroPage />
    }

    return (
        <div>
            {/* New document */}
            <Suspense
                fallback={<Loader className='flex justify-center animate-spin' />}
            >
                <NewDocument></NewDocument>
            </Suspense>
            {/* Recent Document */}
            <Suspense
                fallback={<Loader className='flex justify-center animate-spin' />}
            >
                <RecentDocument></RecentDocument>
            </Suspense>
        </div>
    )
}
