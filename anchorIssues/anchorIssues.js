/*
 * Name: Margaret Donin
 * Date Created: 05/19/22
 * Date revised:
 */




let controller = new AbortController();
let errorMessage = controller.signal;

const url = "DoninMargaret-Resume.pdf";

function DownloadAll() {
    fetch(
        url, {
        method: 'GET',
    }).then(function (resp) {
        return resp.blob();
            
    }).then(function (blob) {
        const newBlob = new Blob([blob], { type: "application/pdf", charset: "UTF-8" })

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        const data = window.URL.createObjectURL(newBlob);
        const link = document.createElement('a');
        link.dataType = "json";
        link.href = data;
        link.download = "IT_WORKS.pdf";
        link.dispatchEvent(new MouseEvent('click'));
        setTimeout(function () {
            // For Firefox it is necessary to delay revoking the ObjectURL
            window.URL.revokeObjectURL(data), 60
        });
    }).catch(function (e) {
        controller.abort();
        console.log('Download aborted ' + errorMessage);
    });
}

function Download() {
    const link = document.createElement('a');
    link.href = url;
    link.download = "YAY.pdf";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
}
