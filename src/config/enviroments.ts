
export class Enviroment {
  
  /*
    This function detects if the envoriment is production
    or development and returns the properly API_URL 
  */
  async getUrl () {
    /*read de node Env variable https://create-react-app.dev/docs/adding-custom-environment-variables/#expanding-environment-variables-in-env */
    if (process.env.NODE_ENV==='production') {
      //Production mode
      return 'https://api.slinqer.com/slinqer/landing/contact'
    } else {
      // local and test url
      return 'https://ad6abf9806a1.ngrok.io'
      // return 'https://api.slinqer.com/pets'
    }
  }
}