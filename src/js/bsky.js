
// VIBECODE SHIT WARNING!!!!!

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=tasory.is-a.dev&limit=1');
        const data = await response.json();
        const postText = data.feed[0].post.record.text;
        document.getElementById('bskyText').textContent = postText;
    } catch (error) {
        console.error('err:', error);
        document.getElementById('bskyText').textContent = "Не удалось загрузить последний пост c bsky/Can't load last post from bsky :< ";
    }
});