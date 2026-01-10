import { Pool } from "pg"

const loginUserIntoDB = async (email: string, password: string) => {
    const user = await Pool

}

export const authService = {
    loginUserIntoDB
}