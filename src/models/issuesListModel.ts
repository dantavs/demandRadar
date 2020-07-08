import { getIssuesListFromJira } from '../services/Jira/issuesSearchService.ts'

interface IIssue {
    key: string
    summary: string
}

const getIssuesListData = async () => {

    let issuesList: Array<IIssue> = []
    const res = await getIssuesListFromJira()

    if (res.status === 200) {
        const data = await res.json()    

        for (let item of data.issues) {
            const issue: IIssue = {
                key : item.key
                ,summary : item.fields.summary
            }  
            issuesList.push(issue)              
        }
    
        return {'status': 0, 'issue': issuesList}    
    }else{
        await res.body?.cancel()
        return {'status': 9, 'issue': ''}
    }
}

export {getIssuesListData}
