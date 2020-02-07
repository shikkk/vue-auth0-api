import { domain, clientId ,audience} from "../../auth_config.json";

export default  {
    clientId: clientId,
    domain: domain,
    audience:audience,
    callbackUris: {
        'development': 'http://localhost:3000/',
        'production': 'http://ilab.cmcm.com/'
    }
}
