let chai = require('chai');
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
let server = require('./index');
var prod = {name:"shree"}
//assertion style
chai.should();

chai.use(chaiHttp);

describe('User Api',()=>{
    describe("Post  /login",()=>{
        
        it("User Logged In",(done)=>{
            const user = {
                email: "shree@mail.com",
                password: "shree"
            }
            chai.request(server)
            .post('/login')
            .send(user)
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })
})


describe(`Products Api`,()=>{
    describe("Post  /product/new",()=>{
        it("Create New Product",(done)=>{
            const user = {
                title: "c",
                price: 200,
                condition: "good",
                author: "xyz",
                pages: 100,
                category: "Fiction",
                seller: "shree.samal1502@gmail.com",
            }
            chai.request(server)
            .post('/product/new')
            .send(user)
            .end(async(err,res)=>{
                prod = res.body;
                res.should.have.status(200);
                done();
            })
        });
    })

    describe("Get  /categories",()=>{
        it("Get Categories",(done)=>{
            chai.request(server)
            .get('/categories')
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })

    describe("Get  /products",()=>{
        it("Get Products",(done)=>{
            chai.request(server)
            .get('/products')
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })

    describe("Post  /product/details",()=>{
        it("Get Product Details",(done)=>{
            chai.request(server)
            .post('/product/details')
            .send({id: prod.id})
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })

    describe("Post  /product/remove",()=>{
        it("Remove Product",(done)=>{
            chai.request(server)
            .post('/product/remove')
            .send({id: prod.id})
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })
})

describe(`Cart Api`,()=>{
    describe("Post  /cart/add",()=>{
        it("Add To Cart",(done)=>{
            const user = {
                user: "shree.samal1502@gmail.com",
                id: "63399193309a203868e282b0"
            }
            chai.request(server)
            .post('/cart/add')
            .send(user)
            .end(async(err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })

    describe("Post  /cart/get",()=>{
        it("Get Cart",(done)=>{
            const user = {
                user: "shree.samal1502@gmail.com",
            }
            chai.request(server)
            .post('/cart/add')
            .send(user)
            .end(async(err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })

    describe("Post  /cart/remove",()=>{
        it("Remove From Cart",(done)=>{
            const user = {
                user: "shree.samal1502@gmail.com",
                id: "63399193309a203868e282b0"
            }
            chai.request(server)
            .post('/cart/remove')
            .send(user)
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    })
})