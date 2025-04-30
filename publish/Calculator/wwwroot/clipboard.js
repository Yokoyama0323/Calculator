window.pasteFromClipboard = async () => {
    try {
        // Clipboard APIを利用してクリップボードのテキストを取得
        const text = await navigator.clipboard.readText();
        console.log("クリップボードから貼り付けた内容:", text);
        return text;
    } catch (err) {
        console.error("貼り付けに失敗しました:", err);
        return null;
    }
};