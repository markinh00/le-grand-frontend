import React from 'react';
import MenuButton from './MenuButton';
import { Button } from '../ui/button';
import { UserRead } from '@/types/user';
import getCurrentUser from '@/actions/user/getCurrentUser';
import Logo from './Logo';
import UserIcon from './UserIcon';


export default async function Header() {
    const user: UserRead | undefined = await getCurrentUser();

    console.log("Header | user:", user);

    return (
        <nav className="bg-header-background text-header-text p-2 flex items-center justify-between min-h-14 w-full">
            <div>
                {user?.scope === "admin" ? <MenuButton position='header' /> : <Logo />}
            </div>

            {user ? (
                <UserIcon user={user} />
            ) : (
                <div>
                    <a href="/register" className='mr-2'><Button variant="default">Cadastrar</Button></a>
                    <a href="/login"><Button variant="secondary">Entrar</Button></a>
                </div>
            )}
        </nav>
    );
}
