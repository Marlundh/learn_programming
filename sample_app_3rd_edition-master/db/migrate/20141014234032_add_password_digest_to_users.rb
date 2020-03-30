class AddPasswordDigestToUsers < ActiveRecord::Migration
  def change    # function defenition
    add_column :users, :password_digest, :string
  end
end
