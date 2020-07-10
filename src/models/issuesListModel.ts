import { getIssuesListFromJira } from '../services/Jira/issuesSearchService.ts'
import { Issue } from '../classes/issue.ts'

const getIssuesListData = async () => {

    let issuesList: Array<Issue> = []
    
    const res = await getIssuesListFromJira()

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
