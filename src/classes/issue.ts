export class Issue {
    project: string
    key: string
    epicName: string
    summary: string
    status: string
    constructor (issueData:any) {
        this.project = issueData.fields.project.name
        this.key = issueData.key
        this.epicName = issueData.fields.customfield_10011
        this.summary = issueData.fields.summary
        this.status = issueData.fields.status.name
    }
}