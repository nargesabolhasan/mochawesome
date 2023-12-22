const {spec} = require('pactum');

describe("test javascript with mochawesome reporter:", () => {

//------------------------------------------------------------------
    it('A: should pass test', async () => {
        await spec()
            .get('https://randomuser.me/api').expectStatus(200);
    });



//------------------------------------------------------------------
    it('B : should get error for expect Status', async () => {
        await spec()
            .get('https://randomuser.me/api').expectStatus(500);
    });



//------------------------------------------------------------------
    it('C : should get error for expect Status', async () => {
        await spec()
            .get('https://randomuser.me/apirrrrrrrrr').expectStatus(200);
    });



//------------------------------------------------------------------
    it('D : should get random male users', async () => {
        await spec()
            .get('https://randomuser.me/api')
            .withQueryParams("gender", "male")
            .expectStatus(200)
            .expectJsonLike({
                "results": [{
                    "gender": "male"
                }]
            });
    });

})