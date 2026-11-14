// async function requestToken(): Promise<string> {
//     // TODO : POST `${API}/oauth/token`, mêmes paramètres que ton curl
//     // TODO : si la réponse n'est pas ok → throw new Error(...)
//     // TODO : lire le JSON, remplir token et expiresAt, renvoyer le token
//   }
  
//   export async function getToken(): Promise<string> {
//     // TODO 1 : token encore valide (avec 60 s de marge) → le renvoyer tel quel
//     // TODO 2 : une demande de token est déjà en cours → renvoyer la même promesse
//     // TODO 3 : sinon lancer requestToken(), garder sa promesse dans `pending`,
//     //          et remettre `pending` à null quand elle se termine (.finally)
//   }