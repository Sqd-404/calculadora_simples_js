window.onload = function () {
    alert("Bem-vindo ao projeto em HTML, CSS e JavaScript!");

    // Referencie o elemento de entrada de arquivo
    const fileInput = document.getElementById("file-input");

    // Ouvinte de eventos para o elemento de entrada de arquivo
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            handleXMLFile(file);
        }
    });

    // Verificar o código UF e exibir a mensagem apropriada
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

    // Analisar o conteúdo XML e extrair o código UF
    function parseXML(xmlContent) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
        const cufElement = xmlDoc.querySelector("cUF");
        if (cufElement) {
            const cufValue = parseInt(cufElement.textContent);
            const messageElement = document.getElementById("message");
            messageElement.textContent = `UF do destinatário ${cufValue}`;
        } else {
            alert("O arquivo XML não contém a tag 'cUF'.");
        }
    }
};