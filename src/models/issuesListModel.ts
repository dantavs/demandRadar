import { getIssuesListFromJira } from '../services/issueService.ts'
import { Issue } from '../classes/issue.ts'
import { JQL } from '../classes/jql.ts'


const getIssuesListData = async (searchContext: string) => {

    let issuesList: Array<Issue> = []
    
    const project: string = "RDI"

    const jql = new JQL(project)
    
    const res = await getIssuesListFromJira(jql.query)

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

const getIssuesListDataByContext = async (project: string, id: string) => {

    let issuesList: Array<Issue> = []

    const jql = new JQL(project)
    
    const res = await getIssuesListFromJira(jql.query)


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

export {getIssuesListData, getIssuesListDataByContext}
