pub use obscure_string_macro::obscure_string;

pub struct ObscureString(pub &'static [u8]);

impl ObscureString {
    pub fn as_string(&self) -> String {
        self.0.iter().map(|b| (b / 2) as char).collect()
    }
}
