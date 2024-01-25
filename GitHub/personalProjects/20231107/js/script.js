window.onload = function () {
    alert("Bem-vindo ao projeto em HTML, CSS e JavaScript!");

    // Referenciar o elemento de entrada de arquivo
    const fileInput = document.getElementById("file-input");

    // Ouvinte de eventos para o elemento de entrada de arquivo
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            handleXMLFile(file);
        }
    });

    // Analisar o conteúdo XML e extrair o código UF do destinatário e do emitente
    function handleXMLFile(file) {
        if (file.type === "text/xml") {
            const reader = new FileReader();
            reader.onload = function (e) {
                const xmlContent = e.target.result;
                parseXML(xmlContent);
            };
            reader.readAsText(file);
        } else {
            alert("Por favor, selecione um arquivo XML válido.");
        }
    }

    function parseXML(xmlContent) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");

        // Extrair o código UF do destinatário
        const cufDestElement = xmlDoc.querySelector("cUF");
        if (cufDestElement) {
            const cufDestValue = parseInt(cufDestElement.textContent);
            const messageDestElement = document.getElementById("message-dest");
            messageDestElement.textContent = `UF do destinatário: ${cufDestValue}`;
        } else {
            alert("O arquivo XML não contém a tag 'cUF' do destinatário.");
        }

        // Extrair o código UF do emitente
        const cufEmitElement = xmlDoc.querySelector("UF");
        if (cufEmitElement) {
            const cufEmitValue = cufEmitElement.textContent;
            const messageEmitElement = document.getElementById("message-emit");
            messageEmitElement.textContent = `UF do emitente: ${cufEmitValue}`;
        } else {
            alert("O arquivo XML não contém a tag 'UF' do emitente.");
        }
    }
};
