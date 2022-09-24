# Azure Resume

This site's code is uploaded into github and then pulled into a pipeline from Azure Devops, which then uploads the changes to a Storage account that has Azure Frontdoor setup in front of it.
The visitor counter is some javascript that polls the Azure Function I created in powershell to retrieve the latest counter from Cosmos DB.  After retrieving the value, it send the record to the client, and then increases the number by 1.
