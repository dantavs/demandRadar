import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getIssue } from '../src/controllers/IssueControllers/getIssue.ts'

const router = new Router

router.get('/api/v1/test', (context) => {
    context.response.status = 200;
    context.response.body = "API Test";
})

router.get('/api/v1/getIssue/:id', getIssue)

export default router