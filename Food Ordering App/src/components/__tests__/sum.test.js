import { sum } from "../sum";

test("adds 3 + 4 to equal 7",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
})