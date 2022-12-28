import Link from 'next/link'

import Footer from '../Footer'

export default function Page() {
    return (
        <>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            <Footer />
        </>
    )
}
