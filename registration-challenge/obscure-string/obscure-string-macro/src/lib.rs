use proc_macro::TokenStream;
use syn::{
    parse::{Parse, ParseStream},
    parse_macro_input, Token,
};

struct ObscuredStringInput {
    ident: syn::Ident,
    literal: syn::LitStr,
}

impl Parse for ObscuredStringInput {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let ident = syn::Ident::parse(input)?;
        let _eq = <Token![=]>::parse(input)?;
        let literal = <syn::LitStr as Parse>::parse(input)?;

        Ok(ObscuredStringInput { ident, literal })
    }
}

#[proc_macro]
pub fn obscure_string(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as ObscuredStringInput);
    let ident = input.ident;
    let content = input.literal.value();
    let content = content
        .as_bytes()
        .iter()
        .map(|b| syn::LitByte::new(b * 2, input.literal.span()));
    quote::quote! {
        const #ident: ObscureString = ObscureString(&[#(#content,)*]);
    }
    .into()
}
