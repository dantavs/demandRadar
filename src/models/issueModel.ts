import { getIssueFromJira } from '../services/Jira/issueService.ts';

interface IIssue {
    key: string
    summary: string
}

const getIssueData = async (id: string) => {

    const res = await getIssueFromJira(id)

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