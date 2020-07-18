import { getIssuesListFromJira } from '../services/Jira/issuesSearchService.ts'
import { Issue } from '../classes/issue.ts'

const createJQL = (searchContext: string) => {
    let jql: string = ''
    switch (searchContext) {
        case ('radarSOC'): 
            jql = "issuetype = Epic and status not in (10000) and project in (RDI)"
            break
        case ('2'):
            jql = "b"
            break
        default:
            jql = "Context not found"
    }

    return jql
}

const getIssuesListData = async (searchContext: string) => {

    let issuesList: Array<Issue> = []

    let jql: string = createJQL(searchContext)

    if (jql === 'Context not found'){
        return {'status': 9, 'issue': ''}
    }
    
    const res = await getIssuesListFromJira(jql)

    if (res.status === 200) {
        const data = await res.json()    

        for (let item of data.issues) {
            const issue = new Issue(item)
            issuesList.push(issue)              
        }
      
        return {'status': 0, 'issue': issuesList}    
    }else{
        await res.body?.cancel()
        return {'status': 9, 'issue': ''}
    }
}

export {getIssuesListData}
