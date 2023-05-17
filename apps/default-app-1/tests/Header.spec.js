import {mount} from "@vue/test-utils";
import Header from "../components/Header.vue";
// import { expect, test } from "vitest";
const wrapper = mount(Header);

it("testing GuessAge component props", async () => {
    // expect(wrapper.text()).toMatchSnapshot()
});

// import { describe, test } from 'vitest'
// import { setup, $fetch } from '@nuxt/test-utils'
//
// describe('My test', async () => {
//     await setup({
// nuxtConfig: {}
//         // test context options
//     })
//
//     test('my test', () => {
//         const wrapper = mount(Header);
//         console.log(wrapper)
//         // ...
//         expect(2+2).toBe(4)
//     })
// })
