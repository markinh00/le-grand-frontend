import React from 'react';
import MenuButton from './MenuButton';
import { Button } from '../ui/button';
import { UserRead } from '@/types/user';
import getCurrentUser from '@/actions/user/getCurrentUser';
import Logo from './Logo';
import UserIcon from './UserIcon';
import { IconButton } from './IconButton';
import { IoCartOutline } from 'react-icons/io5';
import CartIcon from '../home/CartIcon';


export default async function Header() {
    const user: UserRead | undefined = await getCurrentUser();

    return (
        <nav
            className="bg-header-background text-header-text p-2 flex items-center justify-between min-h-14 w-full fixed top-0 left-0 z-10"
        >
            <div>
                {user?.scope === "admin" ? <MenuButton position='header' /> : <Logo />}
            </div>

            <div>
                <CartIcon />
                {user ? (
                    <UserIcon user={user} />
                ) : (
                    <div>
                        <a href="/register" className='mr-2'><Button variant="default">Cadastrar</Button></a>
                        <a href="/login"><Button variant="secondary">Entrar</Button></a>
                    </div>
                )}
            </div>
        </nav>
    );
}
