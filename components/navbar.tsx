import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/nextjs';
import { Logo } from './logo';
import { Button } from './ui/button';

const Navbar = () => {
    return (
        <div className='my-2 mx-4 flex justify-between items-center py-2'>
            {/* logo */}
            {/* Auth */}
            <Logo />
            <SignedOut>
                <SignInButton >
                    <Button>Sign In</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>

        </div>
    );
};

export default Navbar;
