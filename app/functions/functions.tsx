export function handleCardClick(link: string) {
    const newTab = window.open(link, '_blank');
    if (newTab) {
        newTab.focus();
    } else {
        console.error('Unable to open new tab. Please allow pop-ups for this site.');
    }
}