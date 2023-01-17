export async function SaveDoc(json) {
    const { title } = json
    const link = document.createElement("a");
    const blob = new Blob([JSON.stringify(json)], { type: "text/json" });
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.ptnb`;
    link.click();
    URL.revokeObjectURL(link.href);
}