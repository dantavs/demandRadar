import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getIssue, getIssuesList, getIssuesListByContext } from '../src/controllers/issueController.ts'

const router = new Router

router.get('/api/v1/test', (context) => {
    context.response.status = 200;
    context.response.body = "API Test";
})

router.get('/api/v1/getIssue/:id', getIssue)
router.get('/api/v1/getIssuesList/:searchContext', getIssuesList)
router.get('/api/v1/getIssuesListByContext', getIssuesListByContext)

export default router