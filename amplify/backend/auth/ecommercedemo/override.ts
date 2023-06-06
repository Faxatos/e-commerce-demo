import { AmplifyAuthCognitoStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    const isBuyer = {
        "attributeDataType" : 'Boolean',
        "developerOnlyAttribute" : false,
        "mutable" : false,
        "name" : 'isBuyer',
        "required" : false
    };

    const fullName = {
        "attributeDataType" : 'String',
        "developerOnlyAttribute" : false,
        "mutable" : true,
        "name" : 'fullName',
        "required" : false
    };

    const address = {
        "attributeDataType" : 'String',
        "developerOnlyAttribute" : false,
        "mutable" : true,
        "name" : 'address',
        "required" : false
    };

    const description = {
        "attributeDataType" : 'String',
        "developerOnlyAttribute" : false,
        "mutable" : true,
        "name" : 'description',
        "required" : false
    };
     
    resources.userPool.schema = [isBuyer, fullName, address, description];
}
