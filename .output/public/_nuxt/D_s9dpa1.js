import{G as e}from"./BmQILhT8.js";const s={create:r=>e.post("/orders",r),getMyOrders:r=>e.get("/orders/me",{params:r}),getById:r=>e.get(`/orders/${r}`)};export{s as o};
