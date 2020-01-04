export interface LoginUserDto {
    username: string;
    password: string;
}

export interface RegisterUserDto extends LoginUserDto {
    name: string;
}
