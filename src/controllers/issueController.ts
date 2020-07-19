//import { getQuery } from 'https://deno.land/x/oak/helpers.ts'
import { getIssueData } from '../models/issueModel.ts'
import { JQL} from '../classes/jql.ts'
import { getIssuesListData } from '../models/issuesListModel.ts'


const getIssue = async ({params, response } : {params: {id: string}; response: any}) => {

    let issue = await getIssueData(params.id)

    response.status = 200
    response.body = issue
}

const getIssuesList = async ({params, response } : {params: {searchContext: string}; response: any}) => {

    let issuesList = await getIssuesListData(params.searchContext)

    if (issuesList.status === 0){
        response.status = 200
        response.body = issuesList    
    } else {
        response.status = 500
        response.body = 'Internal Error'    
    }
}

const getIssuesListByContext = async ({request, response}: {request: any, response: any}) => {
    const context: string = request.url.searchParams.get('context')    
    const id: string = request.url.searchParams.get('id')    

    const jqlQuery = new JQL(context, id)

    response.status = 200
    response.body = {'context': context, 'id': id, 'jql': jqlQuery.query}
}

export { getIssue, getIssuesList, getIssuesListByContext }