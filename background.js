chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "mathAlign",
        title: "Math Align",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "mathAlign") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: mathAlignAction
        });
    }
});

function mathAlignAction() {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedElement = range.commonAncestorContainer.nodeType === 1
        ? range.commonAncestorContainer
        : range.commonAncestorContainer.parentElement;

    // Find and style KaTeX element if present
    const katexElement = selectedElement.closest('.katex');
    if (katexElement) {
        katexElement.style.setProperty('direction', 'ltr', 'important');
        console.log('Applied direction: ltr to', katexElement);
    } else {
        console.log('No .katex element found near the selection.');
    }

    // Find and style the nearest assistant message div
    const assistantDiv = selectedElement.closest('[data-message-author-role="assistant"]');
    if (assistantDiv) {
        assistantDiv.style.setProperty('direction', 'rtl', 'important');
        console.log('Applied direction: rtl to assistant message div');
    } else {
        console.log('No assistant message div found near the selection.');
    }
}
