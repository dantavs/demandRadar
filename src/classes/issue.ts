export class Issue {
    key: string
    summary: string

    constructor (issueData:any) {
        this.key = issueData.key
        this.summary = issueData.fields.summary
    }
}