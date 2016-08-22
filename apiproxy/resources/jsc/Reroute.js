var baseUrl='http://dev-int-kube.aeg.cloud/api/v1/proxy/namespaces/sandbox-tony/services/augustseventeenl/'

var version=context.getVariable("urirequest.majorVersion");
if(version!=null)
context.setVariable("target.url", baseUrl+context.getVariable("urirequest.majorVersion"));
else
context.setVariable("target.url", baseUrl);
