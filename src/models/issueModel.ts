import { getIssueFromJira } from '../services/issueService.ts';
import { Issue } from '../classes/issue.ts'

const getIssueData = async (id: string) => {

    const res = await getIssueFromJira(id)

    if (res.status === 200) {
        const data = await res.json()    

        const issue = new Issue(data)
    
        return {'status': 0, 'issue': issue}    
    }else{
        await res.body?.cancel()
        return {'status': 9, 'issue': ''}
    }
}

export {getIssueData}