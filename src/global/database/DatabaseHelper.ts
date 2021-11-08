import $ from 'jquery'

import Database from '@Database/Database'

export interface IDBArgument {
    key: string
    Value: string
    Comparasion: string
    JOIN?: 'OR' | 'AND'
}

export interface IDBHelperGetAll {
    target: string
    arguments?: IDBArgument[]
    orderBy?: string
    orderDir?: 'ASC' | 'DESC'
    limit?: string
    offset?: string
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export interface IDBHelperGetWithId {
    index: string
    target: string
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export interface IDBHelperGetWith {
    value: string
    column: string
    target: string
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export interface IDBHelperCreate {
    target: string
    data: { [index: string]: string; }
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export interface IDBHelperUpdate {
    index: string
    target: string
    data: { [index: string]: string; }
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export interface IDBHelperDeleteWithId {
    index: string
    target: string
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export interface IDBHelperCustom {
    query: string
    arguments: string[]
    onSuccess?: (Message: any) => void
    onError?: (Message: any) => void
}

export default class DatabaseHelper {
    static Custom = (props: IDBHelperCustom) => {
        Database.SimpleQuery({ 
            query: props.query,
            arguments: props.arguments,
            onError: props.onError,
            onSuccess: props.onSuccess
        });
    }

    static GetAll = (props: IDBHelperGetAll) => {

        var WhereStatement = "";

        if (props.arguments && props.arguments.length != 0) {
            WhereStatement = "WHERE "
            props.arguments.forEach(e => WhereStatement += "`" + e.key + "`" + e.Comparasion + "\"" + e.Value + "\" " + (e.JOIN ? e.JOIN : ""))
            WhereStatement = WhereStatement.substring(0, WhereStatement.lastIndexOf(" ") + 1)
        }
        
        var OrderBy = ""

        if (props.orderBy) {
            OrderBy = "ORDER BY `" + props.orderBy + "`"
            if (props.orderDir)
                OrderBy += " " + props.orderDir
        }

        var limit = ""

        if (props.limit) {
            limit = "LIMIT "
            if (props.offset)
                limit += props.offset + ","
            limit += props.limit
        }

        Database.SimpleQuery({
            query: `SELECT * FROM \`${props.target}\` ${WhereStatement} ${OrderBy} ${limit}`,
            onError: props.onError,
            onSuccess: props.onSuccess
        });
    }

    static GetWithId = (props: IDBHelperGetWithId) => {
        Database.SimpleQuery({ 
            query: `SELECT * FROM \`${props.target}\` WHERE \`Id\`=?`,
            arguments: [ props.index ],
            onError: props.onError,
            onSuccess: props.onSuccess
        });
    }

    static GetWith = (props: IDBHelperGetWith) => {
        Database.SimpleQuery({ 
            query: `SELECT * FROM \`${props.target}\` WHERE \`${props.column}\`=?`,
            arguments: [ props.value ],
            onError: props.onError,
            onSuccess: props.onSuccess
        });
    }

    static Create = (props: IDBHelperCreate) => {
        var setQuery = "";
        var argumentPlacers = "";
        var Arguments = [];

        for (let key in props.data) {
            setQuery += `, \`${key}\``;
            argumentPlacers += ",?";
            Arguments.push(props.data[key]);
        }

        argumentPlacers = argumentPlacers.slice(1);
        setQuery = setQuery.slice(1);

        Database.SimpleQuery({ 
            query: `INSERT INTO \`${props.target}\` (${setQuery}) VALUES (${argumentPlacers})`,
            arguments: Arguments,
            onError: props.onError,
            onSuccess: (data) => {
                DatabaseHelper.GetWithId({
                    index: data.insertId,
                    target: props.target,
                    onSuccess: props.onSuccess,
                    onError: props.onError
                })
            }
        });
    }

    static UpdateWithId = (props: IDBHelperUpdate) => {
        var setQuery = "";
        var Arguments = [];        
        for (let key in props.data) {
            setQuery += `, \`${key}\`=?`
            Arguments.push(props.data[key]);
        }

        Arguments.push(props.index);
        setQuery = setQuery.slice(1);
        Database.SimpleQuery({ 
            query: `UPDATE ${props.target} SET ${setQuery} WHERE Id=?`,
            arguments: Arguments,
            onError: props.onError,
            onSuccess: props.onSuccess
        });
    }

    static DeleteWithId = (props: IDBHelperDeleteWithId) => {
        Database.SimpleQuery({ 
            query: `DELETE FROM \`${props.target}\` WHERE \`Id\`=?`,
            arguments: [ props.index ],
            onError: props.onError,
            onSuccess: props.onSuccess
        });
    }

    static CreateOrUpdate = () => {
        Database.SimpleQuery({
            query: ``,
            arguments: []
        })
    }
}