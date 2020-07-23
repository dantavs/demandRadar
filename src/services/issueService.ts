import { config } from 'https://deno.land/x/dotenv/mod.ts'
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

const setJiraApiData = () => {
    const JiraBaseUrl: string = config().JIRABASEURL
    const jiraToken: string = base64.fromUint8Array(new TextEncoder().encode(config().JIRATOKEN));

    return {'JiraBaseUrl':JiraBaseUrl, 'jiraToken': jiraToken}
}

const callJiraApi = async (url: string, method: string, token: string, bodyData: string) => {
    const res = await fetch (url, {
        method: method,
        headers: {
             'Authorization': `Basic ${token}`
            ,'Accept': 'application/json'
            ,'Content-Type':'application/json'
        }
        ,body: bodyData
    })

    return res

}


const getIssueFromJira = async (id: string) => {
    const jiraApiData = setJiraApiData()

    const issueUrl = `${jiraApiData.JiraBaseUrl}issue/${id}`

    const res = callJiraApi(issueUrl, 'GET', jiraApiData.jiraToken, '')

    return res
}


const getIssuesListFromJira = async (jql: string) => {
    const jiraApiData = setJiraApiData()

    const issueUrl = `${jiraApiData.JiraBaseUrl}search`

    const bodyData: string = `{
        "jql": "${jql}"
        ,"fields": [
            "key"
            ,"summary"
            ,"status"
            ,"customfield_10011"
            ,"project"
        ]
    }`

    const res = callJiraApi(issueUrl, 'POST', jiraApiData.jiraToken, bodyData)

    return res

}

export { getIssueFromJira, getIssuesListFromJira }