export class JQL {
    query: string


    constructor (project?: String, demandType?: string) {
        let query = "issuetype = Epic and status not in (10000)"

        if (demandType){
            query += ` and 'Tipo de Demanda' = ${demandType}`
        }

        if (project){
            query += ` and project = ${project}`
        }

        this.query = query
    }

}