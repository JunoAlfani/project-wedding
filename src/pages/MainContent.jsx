import Hero from '@/pages/Hero'
import Events from '@/pages/Events'
import Gallery from '@/pages/Gallery';
import Location from '@/pages/Location';
import Wishes from '@/pages/Wishes';
import Gifts from '@/pages/Gifts';

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            <Gallery />
            <Location />
            <Gifts />
            <Wishes />
        </>
    )
}