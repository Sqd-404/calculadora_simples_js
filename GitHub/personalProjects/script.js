const xmlFileInput = document.getElementById("xmlFile");
const carregarXMLButton = document.getElementById("carregarXML");
const processarXMLButton = document.getElementById("processarXML");
const salvarXMLButton = document.getElementById("salvarXML");
const resultadoDiv = document.getElementById("resultado");
const tabelaNCM = document.getElementById("tabelaNCM");
const tabelaNCMBody = tabelaNCM.querySelector("tbody");

let xmlDoc = null;
let ufEmitente = null;
let ufDestinatario = null;
let produtos = null;

carregarXMLButton.addEventListener("click", function () {
    if (xmlFileInput.files.length > 0) {
        const file = xmlFileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const xmlText = e.target.result;
            const parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlText, "text/xml");
            resultadoDiv.textContent = "XML carregado com sucesso!";
            processarXMLButton.style.display = "inline";
        };
        reader.readAsText(file);
    } else {
        resultadoDiv.textContent = "Selecione um arquivo XML primeiro.";
    }
});

processarXMLButton.addEventListener("click", function () {
    if (!xmlDoc) {
        resultadoDiv.textContent = "Carregue um arquivo XML primeiro.";
        return;
    }

    ufEmitente = xmlDoc.querySelector("emit enderEmit UF").textContent;
    ufDestinatario = xmlDoc.querySelector("dest enderDest UF").textContent;
    produtos = xmlDoc.querySelectorAll("det");

    // Preencher a tabela com os NCMs dos produtos
    tabelaNCM.style.display = "table";
    tabelaNCMBody.innerHTML = "";

    produtos.forEach((produto, index) => {
        const cProd = produto.querySelector("prod cProd").textContent;
        const ncm = produto.querySelector("prod NCM").textContent;
        const cfop = produto.querySelector("prod CFOP");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${cProd}</td>
            <td>${ncm}</td>
            <td>${cfop ? cfop.textContent : ""}</td>
        `;

        // Se o UF do emitente for diferente do UF do destinatário, permita a edição do CFOP
        if (ufEmitente !== ufDestinatario) {
            const cfopInput = document.createElement("input");
            cfopInput.type = "text";
            cfopInput.value = cfop ? cfop.textContent : "";
            cfopInput.addEventListener("change", function () {
                cfop.textContent = cfopInput.value;
            });
            tr.querySelector("td:last-child").innerHTML = "";
            tr.querySelector("td:last-child").appendChild(cfopInput);
        }

        tabelaNCMBody.appendChild(tr);
    });

    salvarXMLButton.style.display = "inline";
    resultadoDiv.textContent = "XML processado com sucesso!";
});

salvarXMLButton.addEventListener("click", function () {
    if (!xmlDoc) {
        resultadoDiv.textContent = "Carregue e processe um arquivo XML primeiro.";
        return;
    }

    // Gerar uma nova string XML com as alterações
    const xmlSerializer = new XMLSerializer();
    const xmlString = xmlSerializer.serializeToString(xmlDoc);

    // Criar um arquivo Blob para o download
    const blob = new Blob([xmlString], { type: "text/xml" });

    // Criar um URL temporário e link para download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "xml_atualizado.xml";
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    resultadoDiv.textContent = "XML atualizado salvo com sucesso!";
});

xmlFileInput.addEventListener("change", function () {
    // Limpar resultados ao selecionar um novo arquivo
    resultadoDiv.textContent = "";
    processarXMLButton.style.display = "none";
    salvarXMLButton.style.display = "none";
    tabelaNCM.style.display = "none";
});
