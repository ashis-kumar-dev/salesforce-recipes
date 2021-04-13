public inherited sharing class AccountsDataProvider {
	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts() {
		try {
			return [SELECT Id, Name, Website, Phone FROM Account];
		} catch (Exception e) {
			throw new AuraHandledException(e.getMessage());
		}
	}
}
