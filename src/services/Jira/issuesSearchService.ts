import { config } from 'https://deno.land/x/dotenv/mod.ts'
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

const getIssuesListFromJira = async () => {
    const JiraBaseUrl = config().JIRABASEURL
    const issueUrl = `${JiraBaseUrl}search`

    const jiraToken: string = base64.fromUint8Array(new TextEncoder().encode(config().JIRATOKEN));

    const bodyData: string = `{
        "jql": "issuetype = Epic and status not in (10000) and project in (RDI)"
        ,"fields": [
            "key"
            ,"summary"
            ,"status"
            ,"customfield_10011"
            ,"project"
        ]
    }`

    const res = await fetch (issueUrl, {
        method: 'POST',
        headers: {
        'Authorization': `Basic ${jiraToken}`,
        'Accept': 'application/json',
        'Content-Type':'application/json'
        },
        body: bodyData
    })

    return res

}

export { getIssuesListFromJira }