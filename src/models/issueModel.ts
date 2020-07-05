import { config } from 'https://deno.land/x/dotenv/mod.ts'
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

interface IIssue {
    key: string
    summary: string
}

const getIssueData = async (id: string) => {
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

    if (res.status === 200) {
        const data = await res.json()    

        const issue: IIssue = {
            key : data.key
            ,summary : data.fields.summary
        }
    
        return {'status': 0, 'issue': issue}    
    }else{
        await res.body?.cancel()
        return {'status': 9, 'issue': ''}
    }
}

export {getIssueData}