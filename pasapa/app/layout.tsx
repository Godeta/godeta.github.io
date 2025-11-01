import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
title: 'Pasapa presentation',
description: 'Modern, minimalist single-page site with Play sections',
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body>
{children}
</body>
</html>
)
}