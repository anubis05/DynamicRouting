var baseUrl='http://dev-int-kube.aeg.cloud/api/v1/proxy/namespaces/sandbox-tony/services/augustseventeenl/'

var version=context.getVariable("uriRequest.majorVersion");
if(version!=null)
context.setVariable("target.url", baseUrl+context.getVariable("uriRequest.majorVersion"));
else
context.setVariable("target.url", baseUrl);