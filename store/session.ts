import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module
export default class SessionModule extends VuexModule {
	
	bearerToken: String = ''

	get authToken(): String {
		return this.bearerToken
	}

	@Mutation
	setBearerToken(token: String){
		this.bearerToken = token
	}

}