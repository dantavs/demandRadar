import { config } from 'https://deno.land/x/dotenv/mod.ts'
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

const getIssueFromJira = async (id: string) => {
    const JiraBaseUrl = config().JIRABASEURL
    const issueUrl = `${JiraBaseUrl}issue/${id}`

    const jiraToken: string = base64.fromUint8Array(new TextEncoder().encode(config().JIRATOKEN));

    const res = await fetch (issueUrl, {
        method: 'GET',
        headers: {
        'Authorization': `Basic ${jiraToken}`,
        'Accept': 'application/json'
        }
    })

    return res

}

export {getIssueFromJira}